import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {onChangeCategory} = props

  const renderingCategoryList = () => {
    const {categoryOptions, activeCategoryId} = props
    return (
      <>
        <h1 className="category-heading">Category</h1>
        <ul className="category-list">
          {categoryOptions.map(category => {
            const {name, categoryId} = category
            const activeCategoryClassName =
              activeCategoryId === categoryId ? 'active-category' : ''
            const changeCategory = () => {
              onChangeCategory(categoryId)
            }

            return (
              <li onClick={changeCategory} key={category.categoryId}>
                <p className={`category ${activeCategoryClassName}`}> {name}</p>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const renderingRatingList = () => {
    const {ratingsList, onChangeRating, activeRatingId} = props
    return (
      <>
        <h1 className="category-heading">Ratings</h1>
        <ul className="category-list">
          {ratingsList.map(rating => {
            const {imageUrl, ratingId} = rating

            const activeRatingClassName =
              activeRatingId === ratingId ? 'active-rating' : ''
            const changeRating = () => {
              onChangeRating(ratingId)
            }

            return (
              <li
                onClick={changeRating}
                key={rating.ratingId}
                className="rating-list-item"
              >
                <img
                  src={imageUrl}
                  alt={`rating ${ratingId}`}
                  className="rating-img"
                />
                <p className={`rating-text ${activeRatingClassName}`}>& up</p>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const onChangeTitleSearch = event => {
    if (event.key === 'Enter') {
      const {onChangeTitle} = props
      onChangeTitle(event.target.value)
    }
  }

  const renderingSearchInputField = () => (
    <div className="search-input-container">
      <input
        type="search"
        placeholder="Search"
        className="search-input"
        onKeyDown={onChangeTitleSearch}
      />
      <BsSearch className="search-icon" />
    </div>
  )

  const clrearFilters = () => {
    const {onClearFilters} = props
    onClearFilters()
  }

  return (
    <div className="filters-group-container">
      {renderingSearchInputField()}
      {renderingCategoryList()}
      {renderingRatingList()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clrearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
