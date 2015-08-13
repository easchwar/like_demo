json.array! @photos do |photo|
  json.extract! photo, :id, :url
  like = photo.likes.find_by(user_id: current_user.id)
  if like
    json.like do 
      json.extract! like, :id
    end
  end

  json.numLikes photo.likes.count
end
