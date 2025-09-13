function RenderTest(ctx, startX, startY, pixelSize = 10) {
    const assetText = "BBBBBBBBB\nBRRRRRRRB\nBRWWWWWRB\nBRRRRRRRB\nBBBBBBBBB"; // Placeholder for asset loading

    // Parse asset into 2D array
    const rows = assetText.trim().split('\n');
    const grid = rows.map(row => row.split(''));

    ctx.save();
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            let color;
            if (grid[y][x] === 'B') {
                color = 'black';
            } else if (grid[y][x] === 'W') {
                color = 'white';
            } else if (grid[y][x] === "R") {
                color = 'red';
            } else {
                continue; // skip unknown chars
            }

            ctx.fillStyle = color;
            ctx.fillRect(startX + x * pixelSize, startY + y * pixelSize, pixelSize, pixelSize);
        }
    }
    ctx.restore();
}

window.RenderTest = RenderTest;
