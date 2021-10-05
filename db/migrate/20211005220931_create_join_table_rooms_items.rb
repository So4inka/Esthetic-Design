class CreateJoinTableRoomsItems < ActiveRecord::Migration[6.1]
  def change
    create_join_table :rooms, :items do |t|
      # t.index [:room_id, :item_id]
      # t.index [:item_id, :room_id]
    end
  end
end
