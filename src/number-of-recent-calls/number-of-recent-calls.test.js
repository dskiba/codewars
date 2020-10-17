import { RecentCounter } from './number-of-recent-calls'

describe('number-of-recent-calls', () => {
  it('number-of-recent-calls does this thing...', () => {
    const res = []
    const recentCounter = new RecentCounter()
    res.push(recentCounter.ping())
    res.push(recentCounter.ping(1)) // requests = [1], range is [-2999,1], return 1
    res.push(recentCounter.ping(100)) // requests = [1, 100], range is [-2900,100], return 2
    res.push(recentCounter.ping(3001)) // requests = [1, 100, 3001], range is [1,3001], return 3
    res.push(recentCounter.ping(3002))
    const answer = [null, 1, 2, 3, 3]
    expect(res).toEqual(answer)
  })
})

describe('number-of-recent-calls', () => {
  it('number-of-recent-calls does this thing...', () => {
    const res = []
    const recentCounter = new RecentCounter()
    res.push(recentCounter.ping())
    res.push(recentCounter.ping(1))
    res.push(recentCounter.ping(3001))
    res.push(recentCounter.ping(3100))
    res.push(recentCounter.ping(6300))
    res.push(recentCounter.ping(9400))
    const answer = [null, 1, 2, 2, 1, 1]
    expect(res).toEqual(answer)
  })
})
