import { Column } from './column.js'

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const FONT_SIZE = 20
const LINE_HEIGHT = 1.4
const SYMBOL_SIZE = FONT_SIZE * LINE_HEIGHT

const columns = []
const columnsCount = canvas.width / FONT_SIZE

for (let i = 0; i < columnsCount; i++) {
	columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context))
}

context.font = `bold ${FONT_SIZE}px monospace`

const column = new Column(100, SYMBOL_SIZE, canvas.height, context)

function animate() {
	context.fillStyle = 'rgba(0, 0, 0, 0.1)'
	context.fillRect(0, 0, canvas.width, canvas.height)

	context.fillStyle = 'green'
	columns.forEach(column => {
		setTimeout(column.drawSymbol(), 100)
	})

	setTimeout(() => requestAnimationFrame(animate), 50)
}

animate()