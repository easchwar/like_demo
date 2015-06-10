# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ActiveRecord::Base
  validates :url, presence: true

  has_many :likes
  has_many :likers, through: :likes, source: :user
end

