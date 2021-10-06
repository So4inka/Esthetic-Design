class ItemsController < ApplicationController

  # GET /items
def index
  @items = Item.all 

  render json: @items
end

# GET /items/1
def show
  render json: @item, include: :rooms
end
end