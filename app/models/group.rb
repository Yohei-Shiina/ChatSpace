class Group < ApplicationRecord
  
  has_many :users, through: :gourp_users
  has_many :group_users
end
