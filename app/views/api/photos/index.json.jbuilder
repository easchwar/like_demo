json.array! @photos do |photo|
  json.extract! photo, :id, :url
  like = photo.likes.find_by(user_id: 1)
  if like
    json.like do 
      json.extract! like, :id
    end
  end
end
