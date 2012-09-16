$:.unshift File.join(File.dirname(__FILE__), '../')

require 'minitest/autorun'

require 'app/path'

class TestPath < MiniTest::Unit::TestCase

  def test_delivery_file_path
    assert_equal '/uploaded/uuid/file',  Path.delivery_file_path('uuid', 'file') 
  end

  def test_delivery_base_path
    assert_equal '/uploaded/uuid/',  Path.delivery_base_path('uuid') 
  end

  def test_write_base_path
    assert_equal (File.expand_path('.') + '/app/public/uploaded/uuid/'), Path.write_base_path('uuid')
  end

  def test_write_file_path
    assert_equal (File.expand_path('.') + '/app/public/uploaded/uuid/file'), Path.write_file_path('uuid', 'file')
  end

end

