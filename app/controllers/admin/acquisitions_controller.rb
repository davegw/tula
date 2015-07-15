class Admin::AcquisitionsController < ApplicationController
  layout 'admin'
  include Admin::AcquisitionHelper

  def index
    @acquisitions = Acquisition.all.sort_by(&:company).group_by(&:year)
    @years = @acquisitions.keys.sort.reverse

    render :json => { :years => @years, :acquisitions => @acquisitions }
  end

  def new
    select_options = (2013..Time.now.year).sort.reverse.map(&:to_s)
    render :json => { :year_options => select_options }
  end

  def edit
    @select_options = (2013..2015).map { |year| [year.to_s, year] }
    @acquisition = Acquisition.find params[:id]
  end

  def update
    acquisition = Acquisition.find(params[:id])
    data = params[:acquisition]
    data[:return] = return_calculator(data[:initial_price], data[:acquisition_price])
    acquisition.update_attributes(data)

    render :json => data
  end

  def destroy
    Acquisition.find(params[:id]).destroy

    render :json => { :success => true }
  end

  def create
    initial_price                 = params[:acquisition][:initial_price]
    acquisition_price             = params[:acquisition][:acquisition_price]
    params[:acquisition][:return] = return_calculator(initial_price, acquisition_price)
    Acquisition.create(params[:acquisition])

    redirect_to :action => :index
  end
end
