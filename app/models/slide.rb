class Slide < ActiveRecord::Base
  attr_accessible :image, :link, :order, :title
  has_attached_file :image, 
    :url => "/system/slide/:id/:basename_:style.:extension",
    :path => ":rails_root/public/system/slide/:id/:basename_:style.:extension",
    :styles => { :medium => "903x256>", :thumb => "150x43#" }
end
