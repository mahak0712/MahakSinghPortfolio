class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :blog
 

  validates :content, presence: true, length: {minimum: 5, maximum: 100}
  

  def self.recent
    order("created_at DESC")
end 


end


