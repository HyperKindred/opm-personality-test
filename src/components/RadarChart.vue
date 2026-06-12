<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { RadarChart as RadarChartType } from 'echarts/charts'
import {
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { DimensionScores } from '@/types'
import { DIMENSIONS, DIMENSION_IDS } from '@/data/dimensions'

use([RadarChartType, TooltipComponent, LegendComponent, CanvasRenderer])

const props = defineProps<{
  userScores: DimensionScores
  charScores?: DimensionScores | null
  charName?: string
}>()

const option = computed(() => {
  const indicator = DIMENSIONS.map((d) => ({
    name: `${d.emoji} ${d.label}`,
    max: 100,
  }))

  const series = [
    {
      type: 'radar' as const,
      data: [
        {
          value: DIMENSION_IDS.map((id) => props.userScores[id]),
          name: '你的测评',
          areaStyle: {
            color: 'rgba(255, 200, 50, 0.25)',
          },
          lineStyle: {
            color: '#ffc832',
            width: 2.5,
          },
          itemStyle: {
            color: '#ffc832',
          },
        },
      ],
    },
  ]

  // 如果有角色对照数据，加上第二层
  if (props.charScores) {
    const seriesData = series[0] as any
    seriesData.data.push({
      value: DIMENSION_IDS.map((id) => (props.charScores as DimensionScores)[id]),
      name: props.charName ?? '角色',
      areaStyle: {
        color: 'rgba(100, 200, 255, 0.2)',
      },
      lineStyle: {
        color: '#64c8ff',
        width: 2,
        type: 'dashed' as const,
      },
      itemStyle: {
        color: '#64c8ff',
      },
    })
  }

  return {
    tooltip: {
      trigger: 'item' as const,
    },
    legend: {
      data: ['你的测评', props.charName ?? '角色'].filter(Boolean),
      textStyle: { color: '#ccc' },
      top: 0,
    },
    radar: {
      indicator,
      center: ['50%', '55%'],
      radius: '65%',
      shape: 'polygon' as const,
      splitNumber: 4,
      name: {
        textStyle: {
          color: '#ddd',
          fontSize: 13,
          fontWeight: 600,
        },
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)'],
        },
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.15)',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.12)',
        },
      },
    },
    series,
  }
})
</script>

<template>
  <div class="radar-wrapper">
    <VChart :option="option" autoresize class="radar-chart" />
  </div>
</template>

<style scoped>
.radar-wrapper {
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
}
.radar-chart {
  width: 100%;
  height: 340px;
}
</style>
