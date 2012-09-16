module Path
  extend self

  def delivery_file_path(uuid, file_name)
    delivery_base_path(uuid) + file_name
  end

  def delivery_base_path(uuid)
    "/uploaded/#{uuid}/"
  end

  def write_base_path(uuid)
    File.dirname(__FILE__) + "/public" + delivery_base_path(uuid)
  end

  def write_file_path(uuid, filename)
    write_base_path(uuid) + filename
  end

end
