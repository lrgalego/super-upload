$:.unshift File.join(File.dirname(__FILE__), '../')

require 'minitest/autorun'

require 'app/path'
require 'app/saver'
require 'tempfile'

class TestSave < MiniTest::Unit::TestCase

  def teardown
    `rm -rf app/public/uploaded/*`
  end

  def test_save_descrition
    Saver.save_description('uuid', 'test data')
    assert_equal 'test data', File.read(Path.write_file_path('uuid', 'description')) 
  end

  def test_save_file
    temp_file = Tempfile.new('foo')
    temp_file.write "test data2"
    temp_file.rewind
    Saver.save_file('uuid', 'file', temp_file)
    assert_equal  'test data2', File.read(Path.write_file_path('uuid', 'file')) 
  end

end

