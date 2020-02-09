exports.ensure = (req, res, next) => {
   if (req.isAuthenticated()) return next()
   res.redirect('/auth/login');
}

exports.forward = (req, res, next) => {
   if (!req.isAuthenticated()) {
      next();
   }
   res.redirect('/');
}