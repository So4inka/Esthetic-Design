class RoomsController < ApplicationController
  before_action :set_room, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :authorize, except: [:index, :show]
  before_action :set_admin, only: [:index] 
  # GET /rooms
  def index
    @rooms = Room.where(user:[@admin, @current_user])

    render json: @rooms
  end

  # GET /rooms/1
  def show
    render json: @room, include: :items
  end

  # POST /rooms
  def create
    @room = Room.new(room_params)
    @room.user = @current_user

    if @room.save
      render json: @room, status: :created
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rooms/1
  def update
    if @room.update(room_params)
      render json: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rooms/1
  def destroy
    @room.destroy
  end

#   # adding items to the room method:
# def add_items_to_the_room
# @room = Room.find(params[:id])
# @item = Item.find(params[:item_id])

# @room.items << @item

# render json: @room, include:Items

# end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_room
    @room = Room.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def room_params
    params.require(:room).permit(:name)
  end

  def set_admin 
    @admin = User.where(email: 'Admin@email.com')
  end

  def authorize 
    @authorized_user = @room.user == @current_user
    if !@authorized_user 
     render json: 'Sorry, access denied', status: :unauthorized
    end
  end
end
 

