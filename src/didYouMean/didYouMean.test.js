import { Dictionary } from './didYouMean'


describe('didYouMean', () => {
  it('didYouMean does this thing...', () => {
    const words = ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']
    const expectations = 'strawbery'
    const result = 'strawberry'
    const Dict = new Dictionary(words)
    expect(Dict.findMostSimilar(expectations)).toEqual(result)
  })

  it('didYouMean does this thing...', () => {
    const words = ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']
    const expectations = 'berry'
    const result = 'cherry'
    const Dict = new Dictionary(words)
    expect(Dict.findMostSimilar(expectations)).toEqual(result)
  })

  it('didYouMean does this thing...', () => {
    const words = ['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']
    const expectations = 'heaven'
    const result = 'java'
    const Dict = new Dictionary(words)
    expect(Dict.findMostSimilar(expectations)).toEqual(result)
  })

  it('didYouMean does this thing...', () => {
    const words = ['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']
    const expectations = 'javascript'
    const result = 'javascript'
    const Dict = new Dictionary(words)
    expect(Dict.findMostSimilar(expectations)).toEqual(result)
  })
})
