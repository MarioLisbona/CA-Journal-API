import app from './app.js'
import request from 'supertest'

describe("Get Homepage", () => {
	test('GET /', async () => {
			const res = await request(app).get('/')
			expect(res.status).toBe(200)
			expect(res.headers['content-type']).toBe('application/json; charset=utf-8')  //to be needs to match the whole string
			expect(res.body.info).toBeDefined()
			expect(res.body.info).toBe('Journal API 2023')
	})

	describe('Get categories list', () => {
		let res

		beforeEach(async () => {
			res = await request(app).get('/categories')
			expect(res.status).toBe(200)
			expect(res.headers['content-type']).toMatch(/json/i)	//to match using regex pattern
		})

		it('SHould return an array of 4 elements', () => {
			expect(res.body).toBeInstanceOf(Array)
			expect(res.body.length).toBe(4)
		})

		it('Has an element with the correct data structure and data', () => {
			res.body.forEach(el => {
				expect(el._id).toBeDefined()
				expect(el.name).toBeDefined()
				expect(el._id.length).toBe(24)
			})

			expect(res.body[0].name).toBe('Food')
		})
	})

	test('create a new entry', async () => {
		const res = await request(app).post('/entries').send({
			category: 'Work',
			content: 'Jest Testing'
		})

		expect(res.status).toBe(201)
		expect(res.headers['content-type']).toMatch(/json/i)	//to match using regex pattern
		expect(res.body._id).toBeDefined()
		expect(res.body.content).toBeDefined()
		expect(res.body.category.name).toBe('Work')
		expect(res.body.content).toBe('Jest Testing')
	})
})