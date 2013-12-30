#coding: utf-8
class HomeController < ApplicationController
  def index
    @slides = Slide.find(:all)
    @posts = Post.find(:all,:limit=>6)
    @rosewoods = Rosewood.find(:all,:limit=>4)
    @categories = Category.find(:all)
    @page = Page.find(1)
  end
    
  def news
    @posts = Post.find(:all,:limit=>4)

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @post }
    end
  end
  
  def categories
    @categories = Category.find(:all,:limit=>4)

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @categories }
    end
  end
    
  def rosewoods
    @rosewoods = Rosewood.find(:all,:limit=>8,:order=>"id desc")
  end
  
  def customer_stories
    
  end
      
  
  
end
