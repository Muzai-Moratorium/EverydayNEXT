"use client";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "@/app/day-7/components/common";
import { HeaderNavItem } from "./config/headerNavItem";
import styles from "./headerNav.module.scss";

const HeaderNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <nav className={styles.headerNav}>
        <ul>
          {HeaderNavItem.map((item) => (
            <li key={item.id}>
              <Link
                href={item.src}
                onClick={
                  item.src === "#"
                    ? (e) => {
                        e.preventDefault();
                        setIsModalOpen(true);
                      }
                    : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Notice"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "Outfit, sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              color: "var(--text-main)",
            }}
          >
            아직 준비 중입니다!
          </p>
          <hr
            style={{
              border: "0",
              borderTop: "1px solid var(--border-color)",
              margin: "8px 0",
            }}
          />
        </div>
      </Modal>
    </>
  );
};
export default HeaderNav;
