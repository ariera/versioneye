require 'spec_helper'

describe "submit a versioncomment" do

  before(:each) do
    User.destroy_all
    Product.destroy_all
    Versioncomment.destroy_all
  end

  after(:each) do
    User.destroy_all
    Product.destroy_all
    Versioncomment.destroy_all
  end

  it "submit a versioncomment successfully" do
  	product = Product.new
  	product.versions = Array.new
    product.name = "json_gobi"
    product.name_downcase = "json_gobi"
    product.prod_key = "json_gobi"
    product.prod_type = "RubyGem"
    product.language = "Ruby"
    product.version = "1.0"
    version = Version.new
    version.version = "1.0"
    product.versions.push(version)
    product.save

    user = UserFactory.default
    user.save

    post "/sessions", {:session => {:email => user.email, :password => user.password}}, "HTTPS" => "on"
    assert_response 302
    response.should redirect_to( new_user_project_path )

    get "/package/json_gobi"
    assert_response :success

    assert_tag :tag => "textarea", :attributes => { :class => "input span7", :id => "versioncomment_comment" }
    assert_tag :tag => "button",   :attributes => { :class => "btn2 btn-large"}

    post "/versioncomments", :versioncomment => {:comment => "This is a versioncomment XYZ123", :product_key => product.prod_key, :version => product.version}
    assert_response 302
    response.should redirect_to("/package/json_gobi/version/1~0")

    get "/package/json_gobi/version/1~0"

    assert_tag :tag => "div", :attributes => { :itemprop => "comment"}
    response.body.should include "This is a versioncomment XYZ123"

    user.remove
    product.remove
  end

end
