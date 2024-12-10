export const measurePerformance = (metric: string) => {
  if (typeof window === "undefined") return

  // Create custom performance mark
  performance.mark(metric + "-start")

  return {
    end: () => {
      performance.mark(metric + "-end")
      performance.measure(metric, metric + "-start", metric + "-end")

      // Log to console in development
      if (process.env.NODE_ENV === "development") {
        const measurements = performance.getEntriesByName(metric)
        console.log(`${metric}: ${measurements[0].duration.toFixed(2)}ms`)
      }

      // Clean up marks
      performance.clearMarks(metric + "-start")
      performance.clearMarks(metric + "-end")
    },
  }
}
