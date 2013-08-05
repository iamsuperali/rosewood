require 'test_helper'

class RosewoodsControllerTest < ActionController::TestCase
  setup do
    @rosewood = rosewoods(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:rosewoods)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create rosewood" do
    assert_difference('Rosewood.count') do
      post :create, rosewood: { category_id: @rosewood.category_id, description: @rosewood.description, image: @rosewood.image, title: @rosewood.title }
    end

    assert_redirected_to rosewood_path(assigns(:rosewood))
  end

  test "should show rosewood" do
    get :show, id: @rosewood
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @rosewood
    assert_response :success
  end

  test "should update rosewood" do
    put :update, id: @rosewood, rosewood: { category_id: @rosewood.category_id, description: @rosewood.description, image: @rosewood.image, title: @rosewood.title }
    assert_redirected_to rosewood_path(assigns(:rosewood))
  end

  test "should destroy rosewood" do
    assert_difference('Rosewood.count', -1) do
      delete :destroy, id: @rosewood
    end

    assert_redirected_to rosewoods_path
  end
end
