class Rosewood < ActiveRecord::Base
  attr_accessible :category_id, :description, :image, :title,:piece,:material
  has_attached_file :image, 
    :url => "/system/rosewood/:id/:basename_:style.:extension",
    :path => ":rails_root/public/system/rosewood/:id/:basename_:style.:extension",
    :styles => {:content => "710x710>", :medium => "300x185>", :thumb => "200x117>" }
  belongs_to :category
  before_update :check_image
  
  
  private
  def randomize_file_name
    if image_file_name
      extension = File.extname(image_file_name).downcase
      self.image.instance_write(:file_name, "#{Time.now.strftime("%Y%m%d%H%M%S")}#{rand(1000)}#{extension}")
    end
  end

  def check_image
    randomize_file_name if self.image_file_name_changed?
  end
  
end
