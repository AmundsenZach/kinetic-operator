function RenderTest(ctx, startX, startY, pixelSize = 35) {
    const assetText = "BBBBBBBBBBBBBBBB\nBRRRRRRRRRRRRRRB\nBRWWWWWWWWWWWWRB\nBRWWWWWWWWWWWWRB\nBRWWWWWWWWWWWWRB\nBRWWWWWWWWWWWWRB\nBRWWWWWBBWWWWWRB\nBRWWWWWBBWWWWWRB\nBRWWWWWWWWWWWWRB\nBRWWWWWWWWWWWWRB\nBRWWWWWWWWWWWWRB\nBRWWWWWWWWWWWWRB\nBRRRRRRRRRRRRRRB\nBBBBBBBBBBBBBBBB"; // Placeholder for asset loading; // Placeholder for asset loading

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
            ctx.fillRect(startX + x * pixelSize, startY + y * pixelSize, pixelSize + 1, pixelSize + 1);
        }
    }
    ctx.restore();
}

window.RenderTest = RenderTest;
