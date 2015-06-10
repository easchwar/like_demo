Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :photos, only: [:index, :create, :destroy]
    resources :likes, only: [:create, :destroy]
  end
end
