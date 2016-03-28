json.array!(@recipes) do |recipe|
  json.extract! recipe, :id, :name, :instructions, :preparation_time, :link
  json.url recipe_url(recipe, format: :json)
end