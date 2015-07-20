module Admin::AcquisitionHelper
  def return_calculator(initial, final)
    (final.to_f - initial.to_f) / initial.to_f
  end

  def local_time_format(time_with_zone)
    parsed_time = Time.parse(time_with_zone.to_s)
    local_time = parsed_time.in_time_zone("Pacific Time (US & Canada)")
    local_time.strftime('%b %d, %Y: %I:%M%p')
  end
end
