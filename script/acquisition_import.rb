def get_acquistions
  Acquisition.all.map do |acquisition|
    {
      :year               => acquisition.year,
      :initial_date       => acquisition.initial_date,
      :acquisition_date   => acquisition.acquisition_date,
      :initial_price      => acquisition.initial_price,
      :acquisition_price  => acquisition.acquisition_price,
      :return             => acquisition.return,
      :company            => acquisition.company
    }
  end.to_json
end

def import_acquistions(acquisitions)
  JSON.parse(acquisitions).each { |acquisition| Acquisition.create(acquisition) }
end
