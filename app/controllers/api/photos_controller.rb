class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.includes(:likes)
    render :index 
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render json: @photo
    else
      render json: @photo.errors.full_messages, status: 422 
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render json: @photo
  end

  private

  def photo_params
    params.require(:photo).permit(:url)
  end
end
