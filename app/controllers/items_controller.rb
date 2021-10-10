class ItemsController < ApplicationController
  # before_action :set_item, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: [:create, :update, :destroy]
  # before_action :authorize
  # GET /items
def index
  @items = Item.all 

  render json: @items
end

# GET /items/1
def show  
  @item= Item.find(params[:id])

  render json: @item, include: :rooms
end

 # adding items to the room method: PUT '/rooms/:room_id/items/:id'
 def add_item_to_the_room
  @item = Item.find(params[:id])
  @room = Room.find(params[:room_id])
  
  @item.rooms << @room
  
  render json: @item, include: :rooms

 end

end

# POST /items
# def create
#   @item = Item.new(item_params)
#   @item.user = @current_user

#   if @item.save
#     render json: @item, status: :created
#   else
#     render json: @item.errors, status: :unprocessable_entity
#   end
# end

# # PATCH/PUT /rooms/1
# def update
#   if @item.update(item_params)
#     render json: @item
#   else
#     render json: @item.errors, status: :unprocessable_entity
#   end
# end

# # DELETE /rooms/1
# def destroy
#   @item.destroy
# end

# private
  # Use callbacks to share common setup or constraints between actions.
# def set_room
#     @item= Item.find(params[:id])
#   end

# #   # Only allow a list of trusted parameters through.
# def item_params
#     params.require(:item).permit(:name)
#   end

# def authorize 
#     @authorized_user = @item.user == @current_user
#     if !@authorized_user 
#       render json: 'Sorry, access denied', status: :unauthorized
#   end
#   end
 

