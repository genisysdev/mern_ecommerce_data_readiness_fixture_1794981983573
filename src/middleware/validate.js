export function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: 'VALIDATION_ERROR',
        details: result.error.issues.map(issue => ({
          path: issue.path.join('.'),
          message: issue.message
        }))
      });
    }
    req.validatedBody = result.data;
    next();
  };
}
