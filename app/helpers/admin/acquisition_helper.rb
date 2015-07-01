module Admin::AcquisitionHelper
  def return_calculator(initial, final)
    (final.to_f - initial.to_f) / initial.to_f
  end
end
