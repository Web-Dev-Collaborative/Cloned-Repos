class CreateArtwork < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.integer :artist_id, null: false
    end
    #
    add_index :artworks, [:artist_id, :title], unique: true
  end
end
