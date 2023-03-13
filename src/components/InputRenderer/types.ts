export interface RenderMapItemType {
    id: string
    type: string
    label: string
    defaultValue?: string
}

export interface InputRendererPropsType {
    inputRenderMap: RenderMapItemType[]
    onChange?: (values: Record<string, string>) => void
}
