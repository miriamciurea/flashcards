class RenameSubjectsFlashcardsToCollaborations < ActiveRecord::Migration[7.1]
  def change
    rename_table :subjects_flashcards, :collaborations
  end
end
