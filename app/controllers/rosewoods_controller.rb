# coding: UTF-8
class RosewoodsController < ApplicationController
  load_and_authorize_resource
  layout "admin"
  
  def index
    @rosewoods_grid = initialize_grid(Rosewood,
      :include => [:category],
      :per_page => 20,
      :custom_order => {
        'rosewood.category_id'   => 'category.name'
      })

    respond_to do |format|
      format.html # index.html.erb
      format.json
    end
  end

  def show
    @rosewood = Rosewood.find(params[:id])

    respond_to do |format|
      format.html{render :layout=>"application"} # show.html.erb
      format.json
    end
  end
  
  def new
    @rosewood = Rosewood.new

    respond_to do |format|
      format.html # new.html.erb
      format.json
    end
  end
  
  def edit
    @rosewood = Rosewood.find(params[:id])
  end
  
  def create
    @rosewood = Rosewood.new(params[:rosewood])

    respond_to do |format|
      if @rosewood.save
        format.html { redirect_to(rosewoods_path, :notice => '产品 创建成功。') }
        format.json
      else
        format.html { render :action => "new" }
        format.json
      end
    end
  end
  
  def update
    @rosewood = Rosewood.find(params[:id])

    respond_to do |format|
      if @rosewood.update_attributes(params[:rosewood])
        format.html { redirect_to(rosewoods_path, :notice => '产品 更新成功。') }
        format.json
      else
        format.html { render :action => "edit" }
        format.json
      end
    end
  end
  
  def destroy
    @rosewood = Rosewood.find(params[:id])
    @rosewood.destroy

    respond_to do |format|
      format.html { redirect_to(rosewoods_path,:notice => "删除成功。") }
      format.json
    end
  end
end