class Flashcard < ApplicationRecord
  validates :question, :answer, presence: true
  validates :question, uniqueness: { scope: :answer }

  belongs_to :user, through: :subjects

end
