import { AbilityBuilder } from 'casl'

/**
 * Defines how to detect object's type: https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html
 */
function subjectName (item) {
  if (!item || typeof item === 'string') {
    return item
  }
  return item.type
}

let userActif = {
  userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
}

export default AbilityBuilder.define({subjectName}, can => {
  can(['read', 'create'], 'Post')
  can(['update', 'delete'], 'Post', {userId: userActif.userId})
})
