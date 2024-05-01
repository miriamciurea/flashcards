class AddUserIdForeignKeyToSubjects < ActiveRecord::Migration[7.1]
  def change
    add_reference :subjects, :user, foreign_key: true
  end
end
