/**
 * 
 */
const getNameValidationError = (value: any, formProperty:any, formPropertyGroup:any) => {
  const forenameProperty = formProperty.findRoot().getProperty('forename')
  const nameProperty = formProperty.findRoot().getProperty('name')
  const valid = (forenameProperty.value !== nameProperty.value)

  if (!valid) {
    if (forenameProperty.path !== formProperty.path) {
      forenameProperty.updateValueAndValidity(true, false)
    }
    const error = {
      code: 'MUST_NOT_MATCH_NAME',
      path: `#${forenameProperty.path}`,
      message: '"Forename" must be different then "Name"',
      params: [value]
    }
    return error
  }
  return null
}

/**
 * custom validators
 */
const validators = {
  '/forename': (value: any, formProperty:any, formPropertyGroup:any) => {
    return getNameValidationError(value, formProperty, formPropertyGroup)
  },
  '/name': (value: any, formProperty:any, formPropertyGroup:any) => {
    return getNameValidationError(value, formProperty, formPropertyGroup)
  }
}
export default validators