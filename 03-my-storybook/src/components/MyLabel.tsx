import "./MyLabel.css";

interface Props {
  /**
   *  The allCaps property determines if the label text should be displayed in all uppercase letters.
   */
  allCaps?: boolean;
  /**
   * The color of the label
   * @default "text-primary"
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * The fontColor of the label
   */
  fontColor?: string;
  /**
   * The label text to display
   */
  label: string;
  /**
   * The size of the label
   * @default "normal"
   */
  size?: "normal" | "h1" | "h2" | "h3";
}

export const MyLabel = ({
  allCaps = false,
  color,
  fontColor,
  label,
  size = "normal",
}: Props) => {
  return (
    <span className={`${size} ${color} label`} style={{ color: fontColor }}>
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
