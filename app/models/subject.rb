class Subject < ApplicationRecord
  validates :name, presence: true

  belongs_to :user

  has_many :subjects_flashcards
  has_many :flashcards, through: :subjects_flashcards
end
