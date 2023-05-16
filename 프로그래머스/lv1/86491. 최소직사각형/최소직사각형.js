function solution(sizes) {
    const widths = sizes
                    .map(size => Math.max(size[0], size[1]))
                    .sort((a, b) => b - a);
    const heights = sizes
                    .map(size => Math.min(size[0], size[1]))
                    .sort((a, b) => b - a);
    
    return widths[0] * heights[0];
}