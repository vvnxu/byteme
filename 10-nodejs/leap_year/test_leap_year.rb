require 'minitest/autorun'
require 'minitest/reporters'
require_relative 'leap_year'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

class LeapYearTest < Minitest::Test

  def test_year_2000_is_true
    assert_equal true, leap_year?(2000) 
  end

  def test_year_1999_is_not
    assert_equal false, leap_year?(1999)
  end

  def test_every_100_is_not_unless_divisible_by_400
    assert_equal false, leap_year?(1900)
    assert_equal false, leap_year?(1800)
    assert_equal false, leap_year?(1700)
  end

  def test_every_400_is_a_leap_year
    assert_equal true, leap_year?(1600)
    assert_equal true, leap_year?(1200)
  end

end