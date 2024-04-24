class CreateSubjectsFlashcards < ActiveRecord::Migration[7.1]
  def change
    create_table :subjects_flashcards do |t|
      t.references :flashcard, null: false, foreign_key: true
      t.references :subject, null: false, foreign_key: true
      t.boolean :correct

      t.timestamps
    end
  end
end
