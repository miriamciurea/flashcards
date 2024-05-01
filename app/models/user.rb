class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, presence: true, uniqueness: true

  has_many :user_subjects
  has_many :subjects, through: :user_subjects

  has_many :subjects_flashcards
  has_many :flashcards, through: :subjects_flashcards
end
