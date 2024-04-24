class SubjectsFlashcard < ApplicationRecord
  belongs_to :flashcard
  belongs_to :subject
end
