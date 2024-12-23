const { Category } = require('../../models')

const categoryController = {
  getCategories: (req, res, next) => {
    Promise.all([
      Category.findAll({ raw: true }),
      req.params.id ? Category.findByPk(req.params.id, { raw: true }) : null
    ])
      .then(([categories, category]) => {
        return res.render('admin/categories', { categories, category })
      })
      .catch(err => next(err))
  },
  postCategory: (req, res, next) => {
    const { name } = req.body

    if (!name) throw new Error('Category name is required!')

    Category.create({ name })
      .then(() => {
        req.flash('success_messages', 'Category has been created successfully!')
        res.redirect('/admin/categories')
      })
      .catch(err => next(err))
  },
  putCategory: (req, res, next) => {
    const { name } = req.body

    if (!name) throw new Error('Category name is required!')

    return Category.findByPk(req.params.id)
      .then(category => {
        if (!category) throw new Error('Category does not exist!')
        return category.update({ name })
      })
      .then(() => {
        req.flash('success_messages', 'Category has been updated successfully!')
        res.redirect('/admin/categories')
      })
      .catch(err => next(err))
  },
  deleteCategory: (req, res, next) => {
    return Category.findByPk(req.params.id)
      .then(category => {
        if (!category) throw new Error('Category does not exist!')
        return category.destroy()
      })
      .then(() => {
        req.flash('success_messages', 'Category has been deleted successfully!')
        res.redirect('/admin/categories')
      })
      .catch(err => next(err))
  }
}

module.exports = categoryController
