class Admin::AcquisitionsController < ApplicationController
  layout 'admin'
  include Admin::AcquisitionHelper

  def index
    @acquisitions = Acquisition.all.group_by(&:year)
    @years = @acquisitions.keys.sort.reverse
  end

  def new
    @select_options = (2013..2015).map { |year| [year.to_s, year] }.sort.reverse
    @acquisition = Acquisition.new
  end

  def edit
    @select_options = (2013..2015).map { |year| [year.to_s, year] }
    @acquisition = Acquisition.find params[:id]
  end

  def update
    acquisition = Acquisition.find(params[:id])
    data = params[:acquisition]
    data[:return] = return_calculator(data[:acquisition_price], data[:initial_price])
    acquisition.update_attributes(data)

    redirect_to :action => :index
  end

  def destroy
    Acquisition.find(params[:id]).destroy

    redirect_to :action => :index
  end

  def create
    initial_price                 = params[:acquisition][:initial_price]
    acquisition_price             = params[:acquisition][:acquisition_price]
    params[:acquisition][:return] = return_calculator(initial_price, acquisition_price)
    Acquisition.create(params[:acquisition])

    redirect_to :action => :index
  end
end
